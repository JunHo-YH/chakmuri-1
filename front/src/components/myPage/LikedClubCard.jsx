import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card } from "antd";
import SmallTag from "../common/SmallTag";
import unfilledHeart from "../../images/icons/unfilled_heart.png";
import filledHeart from "../../images/icons/filled_heart.png";

const { Meta } = Card;

const StyledCard = styled(Card)`
	width: 340px;
	height: 380px;
	border: 2px solid #e5e5e5;
	border-radius: 10px;

	.ant-card-cover img {
		height: 190px;
	}

	.ant-card-body {
		height: 190px;
		padding: 20px;
		position: relative;
	}

	.ant-card-meta-title {
		font-family: Roboto;
		font-weight: bold;
		font-size: 22px;
	}

	.ant-card-meta-description {
		font-family: Roboto;
		font-size: 16px;
		color: black;
	}
`;

const TagContainer = styled.div`
	display: flex;
	gap: 5px;

	position: absolute;
	bottom: 25px;
`;

const ClubTag = styled(SmallTag)`
	& {
		font-size: 14px;
		padding: 7px 13px;
	}
`;

const LikeIcon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	position: absolute;
	right: 20px;
	bottom: 25px;
`;

const LikeNum = styled.span``;

const LikedClubCard = ({ ...props }) => {
	let history = useHistory();

	return (
		<StyledCard
			hoverable
			cover={<img src={props.club.imgUrl} alt="Clubcard thumbnail" />}
			onClick={() => history.push(`/detail/${props.club.id}`)}
		>
			<Meta title={props.club.title} description={props.club.contents} />
			<TagContainer>
				{props.club.tags.split(", ").map((tag, i) => (
					<ClubTag key={i}>{tag}</ClubTag>
				))}
			</TagContainer>
			<LikeIcon
				onClick={(e) => {
					e.stopPropagation();
					props.handleDeleteLike(props.club.clubId);
				}}
			>
				{props.like === props.club.clubId ? (
					<img src={filledHeart} alt="Filled like icon"></img>
				) : (
					<img src={unfilledHeart} alt="Unfilled like icon" />
				)}
				<LikeNum>{props.club.likes}</LikeNum>
			</LikeIcon>
		</StyledCard>
	);
};

export default LikedClubCard;
