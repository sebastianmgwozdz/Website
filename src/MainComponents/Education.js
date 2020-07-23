import React from "react";
import "./css/Education.css";
import FadeButton from "./FadeButton";
import { Card, Avatar, Row, Col } from "antd";
import {
  ReadFilled,
  DesktopOutlined,
  PercentageOutlined,
  CodeTwoTone,
} from "@ant-design/icons";

const { Meta } = Card;

export default function Education() {
  return (
    <div className="Education-Background" id="education">
      <div
        style={{
          paddingLeft: "5vw",
          paddingTop: "12vh",
        }}
      >
        <Row gutter={10}>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Avatar
                size="large"
                icon={<ReadFilled />}
                style={{ marginBottom: "2vh" }}
              />
              <Meta
                title="Institution"
                description="San José State University"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Avatar
                size="large"
                icon={<DesktopOutlined />}
                style={{ marginBottom: "2vh" }}
              />
              <Meta
                title="Degree"
                description="BS in Computer Science (2018-2022)"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Avatar
                size="large"
                icon={<PercentageOutlined />}
                style={{ marginBottom: "2vh" }}
              />
              <Meta title="GPA" description="3.9 / 4.0" />
            </Card>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Avatar
                size="large"
                icon={<CodeTwoTone />}
                style={{ marginBottom: "2vh" }}
              />
              <Meta
                title="Relevant Classes"
                description="Intro to Programming, Intro to Data Structures, Intro to Computer Systems, Data Structures and Algorithms, Object Oriented Design"
              />
            </Card>
          </Col>
        </Row>
      </div>

      <img
        src="https://cdn.swimswam.com/wp-content/uploads/2019/02/San-Jose-State-University-logo.png"
        height="200"
        width="200"
        alt="SJSU Logo"
        style={{ marginTop: "4vh" }}
      />
    </div>
  );
}
