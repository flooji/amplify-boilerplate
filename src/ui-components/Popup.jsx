/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Popup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="343px"
      height="363px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Popup")}
    >
      <Icon
        width="343px"
        height="363px"
        viewBox={{ minX: 0, minY: 0, width: 343, height: 363 }}
        paths={[
          {
            d: "M0 8C0 3.58173 3.58172 0 8 0L335 0C339.418 0 343 3.58172 343 8L343 355C343 359.418 339.418 363 335 363L7.99999 363C3.58172 363 0 359.418 0 355L0 8Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "BG")}
      ></Icon>
      <Flex
        gap="12px"
        position="absolute"
        top="66.94%"
        bottom="19.01%"
        left="4.66%"
        right="4.66%"
        direction="column"
        width="311px"
        alignItems="center"
        borderRadius="100px"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(93,176,117,1)"
        {...getOverrideProps(overrides, "Button/Primary")}
      ></Flex>
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
        top="85.95%"
        bottom="8.82%"
        left="4.66%"
        right="4.66%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Secondary Action"
        {...getOverrideProps(overrides, "Secondary Action")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="8.82%"
        bottom="45.45%"
        left="4.66%"
        right="4.66%"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="35.15625px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="78.31%"
          left="11.25%"
          right="10.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Congratulations!"
          {...getOverrideProps(overrides, "Congratulations!")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(102,102,102,1)"
          lineHeight="18.75px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="31.33%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt."
          {...getOverrideProps(
            overrides,
            "Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt."
          )}
        ></Text>
      </View>
    </View>
  );
}
