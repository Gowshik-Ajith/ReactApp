import { Column } from "components/Column";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";

export const CRMvendorpageZomentumFrame96 = (props) => {
  return (
    <Column className={`  ${props?.className} `}>
      <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-circularstd leading-lh37 lg:mr-[7px] lg:text-fs21 mr-[10px] text-colors text-fs28 text-left w-[93%] xl:mr-[8px] xl:text-fs24">
        {props?.children}
      </Text>
      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-circularstd font-normal leading-lh27 lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-colors1 text-fs16 text-left tracking-ls1 w-[90%] xl:mr-[8px] xl:mt-[21px] xl:text-fs14">
        {props?.children1}
      </Text>
      <Row className="3xl:mr-[12px] 3xl:mt-[28px] items-center justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[30%] xl:mr-[8px] xl:mt-[21px]">
        <Text className="3xl:text-fs19 font-circularstd font-medium lg:text-fs12 text-center text-colors2 text-fs16 w-[74%] xl:text-fs14">
          {props?.children2}
        </Text>
        <Image
          className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[9px] h-[24px] lg:h-[19px] lg:ml-[6px] lg:my-[1px] ml-[8px] my-[2px] object-contain w-[auto] xl:h-[22px] xl:ml-[7px] xl:my-[1px]"
          src={props?.src}
          alt={props?.alt}
        />
      </Row>
    </Column>
  );
};

CRMvendorpageZomentumFrame96.defaultProps = {
  children: "",
  children1: "",
  children2: "",
  src: "img_rightmenuarro_3.svg",
  alt: "RightmenuArro",
};
