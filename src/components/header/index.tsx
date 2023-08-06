import React, { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Toolbar from "@radix-ui/react-toolbar";
import * as Popover from "@radix-ui/react-popover";
import axios from 'axios';
import {
  DotFilledIcon,
  CheckIcon,
  HamburgerMenuIcon,
  BoxIcon,
  Link2Icon,
  ImageIcon,
} from "@radix-ui/react-icons";
import * as Avatar from "@radix-ui/react-avatar";
import { useTheme } from "@/app/provider";
import { CardProps } from "@/props";
import Box from "@/components/grid/Cards/Box";
import "./index.scss";
import "./dropdowm.scss";
import ImageBox from "../grid/Cards/ImageBox";
import UrlMetaBox from "../grid/Cards/UrlMetaBox";
interface IProps {
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}
const Header: React.FC<IProps> = ({ setCards }) => {
  const { theme, setTheme } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");
  const imgPopoverRef = React.useRef<HTMLDivElement>();
  const linkPopoverRef = React.useRef<HTMLDivElement>();
  const [imgLinkOpen, setImageLinkOpne] = React.useState(false);
  const [imageLink, setImageLink] = useState("");
  const [urlLinkOpen, setUrlLinkOpne] = React.useState(false);
  const [urlLink, setUrlLink] = useState("");

  const handleThemeColorChange = (color: string | number) => {
    // 处理主题颜色切换
  };

  const toggleThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addBox = () => {
    setCards((preCards) => {
      return [
        ...preCards,
        {
          // 唯一hash
          // 是否编辑状态
          id: `${Date.now()}`,
          isEdit: false,
          pos: { x: 0, y: 0 },
          // 尺寸
          size: {
            w: 1,
            h: 1,
          },
          // 插件能力
          plugin: [],
          render: Box,
        } as any,
      ];
    });
  };

  const createImgLink = (event: any) => {
    if (event.key === "Enter") {
      setImageLinkOpne(false);
      setCards((preCards) => {
        return [
          ...preCards,
          {
            // 唯一hash
            // 是否编辑状态
            id: `${Date.now()}`,
            isEdit: false,
            pos: { x: 0, y: 0 },
            // 尺寸
            size: {
              w: 2,
              h: 2,
            },
            // 插件能力
            content: imageLink,
            plugin: [],
            render: ImageBox,
          } as any,
        ];
      });
      setImageLink("");
      //imgPopoverRef?.current?.close?.();
    }
  };

  const createUrlLink = async (event: any) => {
    let ts = null;
    if (event.key === "Enter") {
      if (urlLink) {
        try {
          const meta = await axios.get( `/api/get-page-info?url=${urlLink}`)
          setCards((preCards) => {
            return [
              ...preCards,
              {
                // 唯一hash
                // 是否编辑状态
                id: `${Date.now()}`,
                isEdit: false,
                pos: { x: 0, y: 0 },
                // 尺寸
                size: {
                  w: 2,
                  h: 2,
                },
                // 插件能力
                content: {
                  ...meta.data.data
                },
                plugin: [],
                render: UrlMetaBox,
              } as any,
            ];
          });
          ts.close()
        } catch (error) {
          ts.close()
        }
      }
      setUrlLink("");
      setUrlLinkOpne(false);
      //imgPopoverRef?.current?.close?.();
    }
  };

  useEffect(() => {
    document.body.onclick = (event) => {
      if (
        imgPopoverRef.current &&
        event.target &&
        !imgPopoverRef.current.contains(event.target as Node)
      ) {
        setImageLinkOpne(false);
      }
      if (
        linkPopoverRef.current &&
        event.target &&
        !linkPopoverRef.current.contains(event.target as Node)
      ) {
        setUrlLinkOpne(false);
      }
    };
  }, []);

  const stopPropagation = (e: any) => {
    // e.stopPropagation();
  };
  return (
    <header className="header">
      <div className="header-controls">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton" aria-label="Customise options">
              <HamburgerMenuIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={5}
            >
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                Help <div className="RightSlot">⌘+B</div>
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Label className="DropdownMenuLabel">
                Theme Config
              </DropdownMenu.Label>
              <DropdownMenu.RadioGroup
                value={theme}
                onValueChange={toggleThemeMode}
              >
                <DropdownMenu.RadioItem
                  className="DropdownMenuRadioItem"
                  value="light"
                >
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <DotFilledIcon />
                  </DropdownMenu.ItemIndicator>
                  Light
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem
                  className="DropdownMenuRadioItem"
                  value="dark"
                >
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <DotFilledIcon />
                  </DropdownMenu.ItemIndicator>
                  Dark
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
          <Toolbar.Button
            className="ToolbarToggleItem"
            value="Box"
            aria-label="Box"
            onClick={addBox}
          >
            <BoxIcon />
          </Toolbar.Button>
          <Popover.Root  open={urlLinkOpen}>
            <Popover.Trigger asChild>
              <Toolbar.Button
                className="ToolbarToggleItem"
                value="Link"
                aria-label="Link"
                onClick={() => setUrlLinkOpne(true)}
              >
                <Link2Icon />
              </Toolbar.Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={2}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="width">
                      Link
                    </label>
                    <input                       
                      placeholder="paste your link here"
                      onKeyDown={createUrlLink}
                      onChange={(e) => setUrlLink(e.target.value)}
                      className="Input"
                      id="width"
                      defaultValue={urlLink} />
                  </fieldset>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Popover.Root open={imgLinkOpen}>
            <Popover.Trigger asChild>
              <Toolbar.Button
                className="ToolbarToggleItem"
                value="Image"
                aria-label="Image"
                onClick={() => setImageLinkOpne(true)}
              >
                <ImageIcon />
              </Toolbar.Button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                ref={imgPopoverRef}
                className="PopoverContent"
                sideOffset={2}
              >
                <div
                  onClick={(e: any) => stopPropagation(e)}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <fieldset className="Fieldset">
                    <input
                      placeholder="paste your link here"
                      onKeyDown={createImgLink}
                      onChange={(e) => setImageLink(e.target.value)}
                      className="Input"
                      id="width"
                      defaultValue={imageLink}
                    />
                  </fieldset>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Toolbar.Separator className="ToolbarSeparator" />
          <Toolbar.Link className="ToolbarLink" style={{ marginRight: 10 }}>
            Unleash your creativity, one page at a time
          </Toolbar.Link>
          <Toolbar.Button
            className="ToolbarButton"
            style={{ marginLeft: "auto" }}
          >
            Share
          </Toolbar.Button>
        </Toolbar.Root>

        <Avatar.Root className="AvatarRoot">
          <Avatar.Fallback className="AvatarFallback">Login</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
  );
};

export default Header;
