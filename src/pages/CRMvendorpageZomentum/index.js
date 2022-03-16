import React from "react";

import { handleSectionNavigation } from "util";
import { useGoogleLogin } from "react-google-login";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { CRMvendorpageZomentumFrame95 } from "components/CRMvendorpageZomentumFrame95";
import { CRMvendorpageZomentumFrame96 } from "components/CRMvendorpageZomentumFrame96";

const CRMvendorpageZomentumPage = () => {
  const handleNavigate2 = () => {
    window.location.href = "https://www.google.com";
  };
  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
        <header className="mx-[auto] self-stretch w-[100%]">
          <Row className="bg-white_A700 items-center justify-between mx-[auto] px-[0] self-stretch w-[100%]">
            <Image
              src="img_frame.png"
              className="2xl:h-[29px] 3xl:h-[34px] 3xl:ml-[82px] 3xl:my-[31px] h-[28px] lg:h-[22px] lg:ml-[53px] lg:my-[20px] ml-[69px] my-[26px] w-[15%] xl:h-[25px] xl:ml-[61px] xl:my-[23px]"
              alt="Frame"
            />
            <Row className="3xl:mr-[154px] 3xl:my-[21px] font-circularstd items-center justify-center lg:mr-[100px] lg:my-[14px] mr-[129px] my-[18px] w-[47%] xl:mr-[114px] xl:my-[16px]">
              <Text className="3xl:my-[15px] 3xl:text-fs16 font-medium lg:my-[10px] lg:text-fs10 my-[13px] text-fs14 text-gray_900 text-left tracking-ls1 xl:my-[11px] xl:text-fs12">{`Features`}</Text>
              <Button
                className="common-pointer 3xl:ml-[38px] 3xl:my-[15px] 3xl:text-fs16 bg-transparent border-bw font-medium lg:ml-[24px] lg:my-[10px] lg:text-fs10 ml-[32px] my-[13px] text-fs14 text-gray_900 text-left tracking-ls1 w-[13%] xl:ml-[28px] xl:my-[11px] xl:text-fs12"
                onClick={() => handleSectionNavigation("block1")}
              >{`Integrations`}</Button>
              <Text className="3xl:ml-[38px] 3xl:my-[15px] 3xl:text-fs16 font-medium lg:ml-[24px] lg:my-[10px] lg:text-fs10 ml-[32px] my-[13px] text-fs14 text-gray_900 text-left tracking-ls1 xl:ml-[28px] xl:my-[11px] xl:text-fs12">{`Pricing`}</Text>
              <Text className="3xl:ml-[38px] 3xl:my-[15px] 3xl:text-fs16 font-medium lg:ml-[24px] lg:my-[10px] lg:text-fs10 ml-[32px] my-[13px] text-fs14 text-gray_900 text-left tracking-ls1 xl:ml-[28px] xl:my-[11px] xl:text-fs12">{`Company`}</Text>
              <Button
                className="common-pointer 3xl:ml-[38px] 3xl:my-[15px] 3xl:text-fs16 bg-transparent border-bw font-medium lg:ml-[24px] lg:my-[10px] lg:text-fs10 ml-[32px] my-[13px] text-fs14 text-gray_900 text-left tracking-ls1 w-[5%] xl:ml-[28px] xl:my-[11px] xl:text-fs12"
                onClick={() => handleSectionNavigation("block1")}
              >{`Blog`}</Button>
              <Button
                className="common-pointer 2xl:py-[13px] 3xl:ml-[38px] 3xl:px-[27px] 3xl:py-[16px] 3xl:text-fs19 bg-white_A700 border border-blue_A400 border-solid font-medium lg:ml-[24px] lg:px-[17px] lg:py-[10px] lg:text-fs12 ml-[32px] px-[23px] py-[13.375px] text-blue_A400 text-center text-fs16 tracking-ls1 w-[21%] xl:ml-[28px] xl:px-[20px] xl:py-[11px] xl:text-fs14"
                onClick={handleNavigate2}
              >{`Get a demo`}</Button>
              <Row className="3xl:ml-[38px] 3xl:my-[15px] font-circularstd items-center justify-evenly lg:ml-[24px] lg:my-[10px] ml-[32px] my-[13px] px-[0] w-[9%] xl:ml-[28px] xl:my-[11px]">
                <Image
                  src="img_iconoutlinepe.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] my-[1px] object-contain w-[auto] xl:h-[15px]"
                  alt="IconOutlinepe"
                />
                <Button
                  className="common-pointer 3xl:text-fs16 bg-transparent border-bw font-medium lg:text-fs10 text-fs14 text-gray_900 text-left tracking-ls1 w-[66%] xl:text-fs12"
                  onClick={signIn}
                >{`Login`}</Button>
              </Row>
            </Row>
          </Row>
        </header>
        <Stack className="2xl:h-[1031px] 3xl:h-[1237px] h-[1030px] lg:h-[802px] mx-[auto] self-stretch w-[100%] xl:h-[917px]">
          <Image
            src="img_rectangle.svg"
            className="2xl:h-[534px] 3xl:h-[640px] absolute h-[533px] lg:h-[415px] object-cover self-stretch top-[0] w-[100%] xl:h-[475px]"
            alt="Rectangle"
          />
          <Stack className="2xl:h-[375px] 2xl:right-[127px] 3xl:h-[450px] 3xl:right-[153px] 3xl:top-[136px] absolute h-[374px] lg:h-[291px] lg:right-[99px] lg:top-[88px] right-[127.83px] top-[114px] w-[69%] xl:h-[333px] xl:right-[113px] xl:top-[101px]">
            <Image
              src="img_partnerheroim.svg"
              className="2xl:h-[262px] 3xl:h-[314px] absolute bottom-[0] h-[261px] lg:h-[203px] object-contain right-[0] w-[35%] xl:h-[233px]"
              alt="Partnerheroim"
            />
            <Column className="absolute font-circularstd items-center justify-start left-[0] top-[0] w-[80%]">
              <Column className="items-center justify-start mx-[auto] self-stretch w-[100%]">
                <Text className="3xl:text-fs57 font-bold leading-lh65 lg:text-fs37 mx-[auto] text-center text-fs48 text-white_A700 w-[79%] xl:text-fs42">{`Find the right partners to fuel your business growth`}</Text>
                <Text className="3xl:mt-[8px] 3xl:text-fs19 font-normal leading-lh30 lg:mt-[5px] lg:text-fs12 mt-[7px] mx-[auto] text-center text-fs16 text-white_A700 w-[77%] xl:mt-[6px] xl:text-fs14">{`Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences`}</Text>
              </Column>
              <Button className="2xl:py-[17px] 3xl:mt-[39px] 3xl:px-[30px] 3xl:py-[20px] 3xl:text-fs19 bg-black_900 border-bw font-bold lg:mt-[25px] lg:px-[19px] lg:py-[13px] lg:text-fs12 mt-[33px] mx-[auto] px-[25px] py-[17.375px] text-center text-fs16 text-white_A700 tracking-ls1 w-[21%] xl:mt-[29px] xl:px-[22px] xl:py-[15px] xl:text-fs14">{`Register today`}</Button>
            </Column>
          </Stack>
          <Image
            src="img_partnerheroim_1.svg"
            className="2xl:h-[256px] 3xl:h-[307px] 3xl:left-[117px] 3xl:top-[384px] absolute h-[254.87px] left-[98px] lg:h-[199px] lg:left-[76px] lg:top-[248px] object-contain top-[320px] w-[28%] xl:h-[227px] xl:left-[87px] xl:top-[284px]"
            alt="Partnerheroim"
          />
          <Column className="3xl:top-[563px] absolute bg-green_A400_3d justify-center lg:top-[364px] self-stretch top-[469px] w-[100%] xl:top-[417px]">
            <Column className="3xl:mt-[103px] items-center lg:mt-[66px] mt-[86px] mx-[auto] self-stretch w-[100%] xl:mt-[76px]">
              <Row className="font-circularstd justify-end mx-[auto] self-stretch w-[100%]">
                <Text className="3xl:ml-[689px] 3xl:mt-[69px] 3xl:text-fs48 font-medium lg:ml-[446px] lg:mt-[45px] lg:text-fs31 ml-[574px] mt-[58px] text-black_900 text-center text-fs40 tracking-ls1 w-[21%] xl:ml-[510px] xl:mt-[51px] xl:text-fs35">{`List. Sell. Grow`}</Text>
                <Image
                  src="img_frame_1.svg"
                  className="2xl:h-[99px] 3xl:h-[118px] 3xl:mb-[13px] 3xl:ml-[458px] 3xl:mr-[88px] h-[98px] lg:h-[77px] lg:mb-[8px] lg:ml-[297px] lg:mr-[57px] mb-[11px] ml-[382px] mr-[74px] object-contain w-[9%] xl:h-[88px] xl:mb-[9px] xl:ml-[339px] xl:mr-[65px]"
                  alt="Frame"
                />
              </Row>
            </Column>
            <Row className="3xl:mb-[97px] 3xl:mt-[48px] 3xl:mx-[117px] justify-start lg:mb-[63px] lg:mt-[31px] lg:mx-[76px] mb-[81px] mt-[40px] mx-[98px] w-[72%] xl:mb-[72px] xl:mt-[35px] xl:mx-[87px]">
              <Image
                src="img_frame_2.svg"
                className="2xl:h-[88px] 3xl:h-[105px] 3xl:mt-[189px] h-[87px] lg:h-[68px] lg:mt-[122px] mt-[158px] object-contain w-[11%] xl:h-[78px] xl:mt-[140px]"
                alt="Frame"
              />
              <Row className="3xl:mb-[80px] 3xl:ml-[123px] items-center justify-between lg:mb-[52px] lg:ml-[80px] mb-[67px] ml-[103px] px-[0] w-[80%] xl:mb-[59px] xl:ml-[91px]">
                <Column className="font-circularstd items-center justify-start w-[31%]">
                  <Image
                    src="img_allinoneplat.svg"
                    className="2xl:h-[101px] 3xl:h-[121px] h-[100px] lg:h-[78px] mx-[auto] object-contain w-[auto] xl:h-[89px]"
                    alt="allinoneplat"
                  />
                  <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh27 lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] self-stretch text-center text-fs16 text-gray_900 tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Be a part of the only  All-In-One platform for IT services`}</Text>
                </Column>
                <Column className="font-circularstd items-center justify-start w-[29%]">
                  <Image
                    src="img_findyournext.svg"
                    className="2xl:h-[101px] 3xl:h-[121px] h-[100px] lg:h-[78px] mx-[auto] object-contain w-[auto] xl:h-[89px]"
                    alt="findyournext"
                  />
                  <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh27 lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] self-stretch text-center text-fs16 text-gray_900 tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Come closer to finding your next customer`}</Text>
                </Column>
                <Column className="font-circularstd items-center justify-start w-[28%]">
                  <Image
                    src="img_growyourbusin.svg"
                    className="2xl:h-[101px] 3xl:h-[121px] h-[100px] lg:h-[78px] mx-[auto] object-contain w-[auto] xl:h-[89px]"
                    alt="growyourbusin"
                  />
                  <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh27 lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] self-stretch text-center text-fs16 text-gray_900 tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Grow your business with a single click`}</Text>
                </Column>
              </Row>
            </Row>
          </Column>
        </Stack>
        <Row className="3xl:mt-[133px] font-circularstd justify-center lg:mt-[86px] mt-[111px] mx-[auto] self-stretch w-[100%] xl:mt-[98px]">
          <Column className="3xl:mb-[66px] 3xl:ml-[306px] 3xl:mt-[123px] justify-start lg:mb-[42px] lg:ml-[198px] lg:mt-[80px] mb-[55px] ml-[255px] mt-[103px] w-[29%] xl:mb-[48px] xl:ml-[226px] xl:mt-[91px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold leading-lh37 lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-gray_901 text-left w-[93%] xl:mr-[8px] xl:text-fs24">
              {
                <>
                  {`Your channel program `}
                  <br />
                  {`on steroids`}
                </>
              }
            </Text>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh27 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_900 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.`}</Text>
          </Column>
          <Image
            src="img_yourchannelpr.png"
            className="2xl:h-[311px] 3xl:h-[373px] 3xl:ml-[145px] 3xl:mr-[279px] h-[310px] lg:h-[242px] lg:ml-[94px] lg:mr-[181px] ml-[121px] mr-[233px] w-[30%] xl:h-[276px] xl:ml-[107px] xl:mr-[207px]"
            alt="Yourchannelpr"
          />
        </Row>
        <Row className="3xl:mt-[208px] items-center justify-start lg:mt-[135px] mt-[174px] mx-[auto] self-stretch w-[100%] xl:mt-[154px]">
          <Image
            src="img_becomethevend.png"
            className="2xl:h-[256px] 3xl:h-[307px] 3xl:ml-[255px] h-[255.54px] lg:h-[199px] lg:ml-[165px] ml-[213px] w-[27%] xl:h-[228px] xl:ml-[189px]"
            alt="Becomethevend"
          />
          <CRMvendorpageZomentumFrame95
            children={
              <>
                {`Become the vendor`}
                <br />
                {`everyone wants to buy from`}
              </>
            }
            children1={`Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!`}
            children2={`Signup now`}
            src="img_rightmenuarro.svg"
            className="2xl:mb-[13px] 3xl:mb-[16px] 3xl:ml-[248px] 3xl:mr-[276px] 3xl:mt-[13px] justify-start lg:mb-[10px] lg:ml-[161px] lg:mr-[178px] lg:mt-[8px] mb-[13.540039px] ml-[207px] mr-[230px] mt-[11px] w-[29%] xl:mb-[12px] xl:ml-[184px] xl:mr-[204px] xl:mt-[9px]"
          />
        </Row>
        <Row className="2xl:mt-[168px] 3xl:mt-[202px] font-circularstd justify-center lg:mt-[131px] mt-[168.45996px] mx-[auto] self-stretch w-[100%] xl:mt-[149px]">
          <CRMvendorpageZomentumFrame96
            children={
              <>
                {`It’s like having Your best`}
                <br />
                {`Salesman on autopilot`}
              </>
            }
            children1={`Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.`}
            children2={`Signup now`}
            src="img_rightmenuarro_1.svg"
            className="3xl:ml-[306px] 3xl:mt-[20px] justify-start lg:ml-[198px] lg:mt-[13px] ml-[255px] mt-[17px] w-[29%] xl:ml-[226px] xl:mt-[15px]"
          />
          <Image
            src="img_itslikehavin.png"
            className="2xl:h-[260px] 2xl:mb-[15px] 2xl:mr-[359px] 3xl:h-[312px] 3xl:mb-[18px] 3xl:ml-[192px] 3xl:mr-[430px] h-[259.52px] lg:h-[202px] lg:mb-[12px] lg:ml-[124px] lg:mr-[279px] mb-[15.47998px] ml-[160px] mr-[358.89px] w-[18%] xl:h-[231px] xl:mb-[13px] xl:ml-[142px] xl:mr-[319px]"
            alt="Itslikehavin"
          />
        </Row>
        <Row className="3xl:mt-[156px] justify-end lg:mt-[101px] mt-[130px] mx-[auto] self-stretch w-[100%] xl:mt-[115px]">
          <Image
            src="img_trackyourchan.png"
            className="2xl:h-[241px] 2xl:mb-[14px] 3xl:h-[289px] 3xl:mb-[17px] 3xl:ml-[314px] h-[240.4px] lg:h-[187px] lg:mb-[11px] lg:ml-[203px] mb-[14.600098px] ml-[262px] w-[20%] xl:h-[214px] xl:mb-[12px] xl:ml-[233px]"
            alt="Trackyourchan"
          />
          <CRMvendorpageZomentumFrame95
            children={`Track your channel performance`}
            children1={`Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.`}
            children2={`Signup now`}
            className="2xl:ml-[255px] 3xl:ml-[306px] 3xl:mr-[276px] 3xl:mt-[28px] justify-start lg:ml-[198px] lg:mr-[178px] lg:mt-[18px] ml-[255.02002px] mr-[230px] mt-[24px] w-[29%] xl:ml-[226px] xl:mr-[204px] xl:mt-[21px]"
          />
        </Row>
        <Row className="3xl:mt-[138px] font-circularstd items-center justify-center lg:mt-[89px] mt-[115px] mx-[auto] self-stretch w-[100%] xl:mt-[102px]">
          <CRMvendorpageZomentumFrame96
            children={
              <>
                {`Get The best version of `}
                <br />
                {`Your sales playbook`}
              </>
            }
            children1={`Gather insights about top channel sellers and find out what pitch and collaterals ensure maximum profitability. Win happy customers with an optimized sales playbook.`}
            children2={`Signup now`}
            className="2xl:mb-[31px] 3xl:mb-[38px] 3xl:ml-[306px] 3xl:mt-[37px] justify-start lg:ml-[198px] lg:my-[24px] mb-[31.689941px] ml-[255px] mt-[31px] w-[29%] xl:mb-[28px] xl:ml-[226px] xl:mt-[27px]"
          />
          <Image
            src="img_getthebestve.svg"
            className="2xl:h-[321px] 2xl:mr-[313px] 3xl:h-[386px] 3xl:ml-[138px] 3xl:mr-[376px] h-[320.69px] lg:h-[250px] lg:ml-[89px] lg:mr-[243px] ml-[115px] mr-[313.24px] object-contain w-[25%] xl:h-[286px] xl:ml-[102px] xl:mr-[278px]"
            alt="GetThebestve"
          />
        </Row>
        <footer
          className="2xl:mt-[88px] 3xl:mt-[106px] lg:mt-[68px] mt-[88.31006px] mx-[auto] self-stretch w-[100%] xl:mt-[78px]"
          id="block1"
        >
          <Column className="bg-black_900 items-center justify-center mx-[auto] self-stretch w-[100%]">
            <Row className="3xl:mt-[106px] items-center justify-evenly lg:mt-[69px] mt-[89px] mx-[auto] px-[0] self-stretch w-[100%] xl:mt-[79px]">
              <Row className="justify-center self-stretch w-[100%]">
                <Column className="3xl:mb-[33px] 3xl:ml-[268px] font-circularstd justify-start lg:mb-[21px] lg:ml-[174px] mb-[28px] ml-[224px] w-[6%] xl:mb-[24px] xl:ml-[199px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Product`}</Text>
                  <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-circularstd justify-start mx-[auto] self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs12">{`Features`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Pricing`}</Text>
                      <Text className="3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mt-[7px] lg:text-fs10 mt-[10px] self-stretch text-fs14 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs12">{`Integrations`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Product`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="3xl:ml-[153px] font-circularstd justify-start lg:ml-[99px] ml-[128px] w-[9%] xl:ml-[113px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Company`}</Text>
                  <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-circularstd justify-start mx-[auto] self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs12">{`About us`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Contact us`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Submit a ticket`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Privacy policy`}</Text>
                      <Text className="3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mt-[7px] lg:text-fs10 mt-[10px] self-stretch text-fs14 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs12">{`Terms & conditions`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="3xl:ml-[153px] font-circularstd justify-start lg:ml-[99px] ml-[128px] w-[9%] xl:ml-[113px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Users`}</Text>
                  <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-circularstd justify-start mx-[auto] self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs12">{`Login`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Get a demo`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Talk to us`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`Privacy policy`}</Text>
                      <Text className="3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mt-[7px] lg:text-fs10 mt-[10px] self-stretch text-fs14 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs12">{`Terms & conditions`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="3xl:mb-[100px] 3xl:ml-[153px] font-circularstd justify-start lg:mb-[65px] lg:ml-[99px] mb-[84px] ml-[128px] w-[5%] xl:mb-[74px] xl:ml-[113px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Guides`}</Text>
                  <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] mx-[auto] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-circularstd justify-start mx-[auto] self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs12">{`MSP`}</Text>
                      <Text className="3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mt-[7px] lg:text-fs10 mt-[10px] self-stretch text-fs14 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs12">{`MSP Sales`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="3xl:mb-[134px] 3xl:ml-[153px] 3xl:mr-[264px] font-circularstd justify-start lg:mb-[87px] lg:ml-[99px] lg:mr-[171px] mb-[112px] ml-[128px] mr-[220px] w-[6%] xl:mb-[99px] xl:ml-[113px] xl:mr-[195px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:text-fs14">{`Contact Us`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs14 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs12">{`Address`}</Text>
                </Column>
              </Row>
            </Row>
            <Row className="3xl:mb-[73px] 3xl:mt-[68px] font-circularstd items-center justify-evenly lg:mb-[47px] lg:mt-[44px] mb-[61px] mt-[57px] mx-[auto] px-[0] self-stretch w-[100%] xl:mb-[54px] xl:mt-[50px]">
              <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700 xl:text-fs12">{`© 2020 Pactora Inc. All rights reserved.`}</Text>
              <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700 xl:text-fs12">{`Follow us on social`}</Text>
            </Row>
          </Column>
        </footer>
      </Column>
    </Column>
  );
};

export default CRMvendorpageZomentumPage;
