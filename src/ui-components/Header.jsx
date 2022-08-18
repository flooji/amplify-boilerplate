/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="926px"
      height="128px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,248,248,1)"
        {...getOverrideProps(overrides, "BG")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        bottom="32px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Buttons /"
        {...getOverrideProps(overrides, "Buttons /")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(102,102,102,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        bottom="69px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Team or Project Name"
        {...getOverrideProps(overrides, "Team or Project Name")}
      ></Text>
    </View>
  );
}
