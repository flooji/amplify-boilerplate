/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ToggleRight(props) {
  const { first, second, overrides, ...rest } = props;
  return (
    <View
      width="454px"
      height="108px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ToggleRight")}
    >
      <View
        height="50px"
        position="absolute"
        top="29px"
        left="56px"
        right="55px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Segmented Control/Left")}
      >
        <Icon
          width="343px"
          height="50px"
          viewBox={{ minX: 0, minY: 0, width: 343, height: 50 }}
          paths={[
            {
              d: "M25 1L318 1L318 -1L25 -1L25 1ZM318 49L25 49L25 51L318 51L318 49ZM25 49C11.7452 49 1 38.2548 1 25L-1 25C-1 39.3594 10.6406 51 25 51L25 49ZM342 25C342 38.2548 331.255 49 318 49L318 51C332.359 51 344 39.3594 344 25L342 25ZM318 1C331.255 1 342 11.7452 342 25L344 25C344 10.6406 332.359 -1 318 -1L318 1ZM25 -1C10.6406 -1 -1 10.6406 -1 25L1 25C1 11.7452 11.7452 1 25 1L25 -1Z",
              stroke: "rgba(232,232,232,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 25C0 11.1929 11.1929 0 25 0L318 0C331.807 0 343 11.1929 343 25L343 25C343 38.8071 331.807 50 318 50L25 50C11.1929 50 0 38.8071 0 25L0 25Z",
              fill: "rgba(246,246,246,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "BG31503343")}
        ></Icon>
        <Icon
          width="171.5px"
          height="46px"
          viewBox={{ minX: 0, minY: 0, width: 171.5, height: 46 }}
          paths={[
            {
              d: "M0 23C0 10.2975 10.2975 0 23 0L148.5 0C161.203 0 171.5 10.2975 171.5 23L171.5 23C171.5 35.7025 161.203 46 148.5 46L23 46C10.2975 46 0 35.7025 0 23L0 23Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="4%"
          bottom="4%"
          left="2px"
          right="169.5px"
          {...getOverrideProps(overrides, "BG31503344")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(189,189,189,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 9.5px - -0.5px)"
          left="calc(50% - 27px - -83.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={second}
          {...getOverrideProps(overrides, "Photos")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(93,176,117,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 9.5px - -0.5px)"
          left="calc(50% - 22px - 83.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={first}
          {...getOverrideProps(overrides, "Posts")}
        ></Text>
      </View>
    </View>
  );
}
