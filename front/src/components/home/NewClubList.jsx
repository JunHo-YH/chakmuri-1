import React from "react";
import { Row, Col } from "antd";
import ClubCard from "./MainClubCard";

const NewList = () => {
	return (
		<Row gutter={24}>
			<Col span={6}>
				<ClubCard />
			</Col>
			<Col span={6}>
				<ClubCard />
			</Col>
			<Col span={6}>
				<ClubCard />
			</Col>
			<Col span={6}>
				<ClubCard />
			</Col>
		</Row>
	);
};

export default NewList;
