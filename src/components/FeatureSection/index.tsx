// @ts-nocheck
import React, { useState } from "react";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import styles from "./index.module.scss";

const FeatureSection = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">LetUS.me</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div
        className={`flex flex-col items-center justify-center space-y-4 ${styles.featureSection}`}
      >
        <h2 className={`text-2xl font-bold ${styles.featureTitle}`}>
          重新定义您的个人信息页
        </h2>
        <div className="flex items-center space-x-2">
          <Input
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-600 text-small">letus.me/</span>
              </div>
            }
            labelRight
            value={name}
            onChange={(e) => setName(e.target.value)}
            endContent={
              <Button auto color="primary" variant="shadow">
                创建
              </Button>
            }
          />
        </div>
      </div>

      <div className="flex-1"></div>
      <footer class="bg-gray-900 text-gray-300 py-8">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left">
            <p class="text-sm">Power by Letus</p>
          </div>
          <div class="flex justify-center md:justify-end mt-4 md:mt-0">
            <a href="#" class="mx-3 hover:text-gray-400">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M469.333,0H42.667C19.135,0,0,19.135,0,42.667v426.667C0,492.865,19.135,512,42.667,512h426.667c23.531,0,42.667-19.135,42.667-42.667V42.667C512,19.135,492.865,0,469.333,0z M384,213.333h-42.667v42.667H384v42.667h-42.667V384h-42.667v-42.667H256v-42.667h42.667V256H256v-42.667c0-23.552-19.115-42.667-42.667-42.667H149.333v-42.667h42.667c23.552,0,42.667-19.115,42.667-42.667V85.333C234.667,61.781,215.552,42.667,192,42.667H106.667C83.115,42.667,64,61.781,64,85.333v42.667C64,134.885,83.115,154,106.667,154H149.333v42.667H106.667c-23.552,0-42.667,19.115-42.667,42.667v42.667c0,23.552,19.115,42.667,42.667,42.667h85.333c23.552,0,42.667-19.115,42.667-42.667v-42.667h42.667v42.667c0,23.552,19.115,42.667,42.667,42.667h42.667c23.552,0,42.667-19.115,42.667-42.667v-42.667H384c23.552,0,42.667-19.115,42.667-42.667v-42.667C426.667,232.448,407.552,213.333,384,213.333z" />
              </svg>
            </a>
            <a href="#" class="mx-3 hover:text-gray-400">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M256,8C119.043,8,8,119.043,8,256s111.043,248,248,248s248-111.043,248-248S392.957,8,256,8z M367.467,351.467 c-4.267,4.267-8.533,8.533-17.067,8.533c-25.6,0-51.2,0-76.8,0c-12.8,0-21.333-4.267-34.133-8.533 c12.8-25.6,29.867-46.933,55.467-68.267c-25.6-21.333-46.933-42.667-72.533-61.733C209.067,174.933,192,174.933,174.933,174.933 c-38.4,0-72.533,12.8-98.133,38.4c-25.6,25.6-38.4,55.467-38.4,93.867c0,34.133,8.533,68.267,25.6,98.133 c21.333,38.4,51.2,68.267,89.6,89.6c29.867,17.067,64,25.6,98.133c0,38.4-12.8,72.533-38.4,98.133c-25.6,25.6-59.733,38.4-98.133,38.4c-17.067,0-34.133,0-46.933-4.267 c21.333-17.067,42.667-34.133,64-55.467c-12.8-12.8-25.6-25.6-38.4-38.4c-12.8-12.8-25.6-25.6-38.4-38.4 c-4.267-4.267-8.533-8.533-8.533-17.067c0-8.533,4.267-12.8,8.533-17.067c21.333-21.333,42.667-42.667,64-64 c17.067-17.067,34.133-34.133,51.2-51.2c4.267-4.267,8.533-8.533,12.8-12.8c4.267-4.267,8.533-8.533,12.8-12.8 c4.267-4.267,8.533-4.267,12.8-4.267c8.533,0,12.8,4.267,17.067,8.533c4.267,4.267,8.533,8.533,8.533,17.067 c0,8.533-4.267,12.8-8.533,17.067c-17.067,17.067-34.133,34.133-51.2,51.2c-25.6,25.6-51.2,51.2-72.533,72.533 c-17.067,17.067-29.867,34.133-38.4,55.467c0,4.267,0,8.533,0,12.8c0,4.267,0,8.533,4.267,12.8c4.267,4.267,8.533,8.533,12.8,12.8 c4.267,4.267,8.533,8.533,12.8,12.8c4.267,4.267,8.533,8.533,12.8,12.8c25.6,25.6,59.733,38.4,98.133,38.4 c38.4,0,72.533-12.8,98.133-38.4c25.6-25.6,38.4-59.733,38.4-98.133C405.333,411.733,392.957,377.6,367.467,351.467z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeatureSection;
