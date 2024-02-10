"use client";

import { Card, Flex } from "antd";

const DynamicContent = () => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        content="center"
        className="relative pt-16 pb-32"
        style={{ minHeight: "40vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url("https://media.discordapp.net/attachments/1187774461227835476/1205052848514007100/pexels-karolina-grabowska-5980917.jpg?ex=65d6f7eb&is=65c482eb&hm=5928dec71e544c7f28533d5aac0e1900a768fb47b6bb2bef4c30aae1bbf580ad&=&format=webp&width=966&height=644")`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          />
        </div>

        <div className=" relative pr-12">
          <h1 className="text-white">User Title..</h1>
        </div>
      </Flex>

      <Card hoverable className="-mt-24 z-0 h-52  mx-14 ">
        <p className=" text-center ">User Description</p>
      </Card>
    </>
  );
};

export default DynamicContent;
