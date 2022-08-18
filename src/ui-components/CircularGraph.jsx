/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function CircularGraph(props) {
  const {
    number = 0,
    currency = "$",
    percentage = 0,
    textPercentage = "% spent",
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="196px"
      height="196px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CircularGraph")}
    >
      <Icon
        width="196px"
        height="196px"
        viewBox={{ minX: 0, minY: 0, width: 196, height: 196 }}
        paths={[
          {
            d: "M193 98C193 150.467 150.467 193 98 193L98 199C153.781 199 199 153.781 199 98L193 98ZM98 193C45.5329 193 3 150.467 3 98L-3 98C-3 153.781 42.2192 199 98 199L98 193ZM3 98C3 45.5329 45.5329 3 98 3L98 -3C42.2192 -3 -3 42.2192 -3 98L3 98ZM98 3C150.467 3 193 45.5329 193 98L199 98C199 42.2192 153.781 -3 98 -3L98 3Z",
            stroke: "rgba(232,232,232,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Inner Circle")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(93,176,117,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="40.82%"
        bottom="44.39%"
        left="29.59%"
        right="30.1%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${""}${currency}${number}`}
        {...getOverrideProps(overrides, "$32.01")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(189,189,189,1)"
        lineHeight="11.71875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="59.69%"
        bottom="34.18%"
        left="36.73%"
        right="37.76%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${percentage}${textPercentage}`}
        {...getOverrideProps(overrides, "70% spent")}
      ></Text>
      <Icon
        width="196px"
        height="196px"
        viewBox={{ minX: 0, minY: 0, width: 196, height: 196 }}
        paths={[
          {
            d: "M160.672 171.379L161.646 172.52L160.672 171.379ZM113.096 193.312L113.331 194.793L113.096 193.312ZM19.9299 154.721L21.1434 153.84L19.9299 154.721ZM12.0179 54.1899L10.6814 53.5089L12.0179 54.1899ZM47.5789 15.7202L46.7951 14.4413L47.5789 15.7202ZM188.35 127.357C182.936 144.019 173.02 158.86 159.698 170.239L161.646 172.52C175.389 160.782 185.619 145.472 191.204 128.284L188.35 127.357ZM159.698 170.239C146.375 181.617 130.166 189.09 112.861 191.83L113.331 194.793C131.181 191.966 147.903 184.258 161.646 172.52L159.698 170.239ZM112.861 191.83C95.5568 194.571 77.8316 192.473 61.6451 185.769L60.497 188.54C77.1946 195.457 95.4797 197.621 113.331 194.793L112.861 191.83ZM61.6451 185.769C45.4586 179.064 31.4415 168.014 21.1434 153.84L18.7163 155.603C29.3396 170.225 43.7994 181.624 60.497 188.54L61.6451 185.769ZM21.1434 153.84C10.8453 139.666 4.66746 122.92 3.29285 105.454L0.302101 105.689C1.72012 123.707 8.09306 140.981 18.7163 155.603L21.1434 153.84ZM3.29285 105.454C1.91824 87.9875 5.40041 70.4814 13.3544 54.8709L10.6814 53.5089C2.47621 69.6124 -1.11592 87.6713 0.302101 105.689L3.29285 105.454ZM13.3544 54.8709C21.3084 39.2604 33.4243 26.1534 48.3626 16.9992L46.7951 14.4413C31.385 23.8846 18.8865 37.4054 10.6814 53.5089L13.3544 54.8709ZM48.3626 16.9992C63.301 7.84494 80.4799 3 98 3L98 8.43769e-15C79.9266 -2.15523e-07 62.2052 4.99794 46.7951 14.4413L48.3626 16.9992Z",
            stroke: "rgba(93,176,117,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Outer Circle")}
      ></Icon>
    </View>
  );
}
