import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import logo from "../scss/img/9dev.jpg";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4">
            <img src={logo} style={{width: "100%"}}/>
          </div>  
          <div className="col-lg-8">
            <h4 style={{textAlign: "left"}}>
            <br/>
            9DEV는 다양한 개발자들이 함께하는 모각코 스터디입니다.<br/><br/>
            스터디의 공통 주제는 없습니다. <br/><br/>
            기본적으로 자율적인 스터디를 지향하고 있습니다.<br/><br/>
            본 스터디는 2018년 7월부터 시작하여 <br/><br/>
            자유롭고 좋은 분위기를 유지하여 꾸준히 모임을 진행하고 있습니다.<br/><br/>
            퇴근 후나 주말에 같이 공부하고 싶으시다면 저희 9DEV와 함께하세요.<br/><br/><br/>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
             <br/>
             <h2>정기 모임: 매주 수요일 / 모임 장소: 신림역 근방 카페 </h2>
           </div> 
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
