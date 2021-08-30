import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Row, Col, Checkbox, Select, message } from "antd";
import TagFilter from "./TagFilter";
import SearchBar from "./SearchBar";
import Pagination from "../common/Pagination";
import ClubCard from "../common/ClubCard";

const { Option } = Select;

const Wrapper = styled.div`
	width: 1200px;
	margin: 60px auto;
`;

const MainTitle = styled.div`
	font-size: 26px;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
`;
const TitleRow = styled.div`
	display: flex;
	align-items: center;
	margin: 50px 0;
`;

const Title = styled.div`
	font-family: Roboto;
	font-weight: 500;
	font-size: 24px;
	flex: 5;
`;

const CheckboxFilter = styled(Checkbox)`
	font-family: Roboto;
	font-size: 18px;
	flex: 0.7;

	.ant-checkbox-inner {
		width: 20px;
		height: 20px;
	}

	.ant-checkbox-checked .ant-checkbox-inner {
		background-color: #fea82f;
		border-color: #fea82f;
	}

	.ant-checkbox-checked::after {
		border-color: #fea82f;
	}

	.ant-checkbox-wrapper:hover .ant-checkbox-inner,
	.ant-checkbox:hover .ant-checkbox-inner,
	.ant-checkbox-input:focus + .ant-checkbox-inner {
		border-color: #fea82f;
	}
`;

const SortFilter = styled(Select)`
	flex: 0.7;

	.ant-select-selection-item {
		font-size: 16px;
	}

	&:not(.ant-select-disabled):hover .ant-select-selector {
		border-color: #fea82f;
	}
`;

const CardContainer = styled(Row)`
	width: 100%;
	margin-bottom: 90px;
`;

const PaginationRow = styled(Row)`
	width: 100%;
	margin-top: 48px;
	justify-content: center;
`;

const Main = () => {
	const [clubs, setClubs] = useState();
	const [sortBy, setSortBy] = useState("createdAt");
	const [clubStatus, setClubStatus] = useState("");
	const [selectedTags, setSelectedTags] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [likedClubs, setLikedClubs] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const userId = localStorage.getItem("user_id");

	useEffect(() => {
		const fetchData = async () => {
			const sendTags = selectedTags.join(", ");

			try {
				const res = await axios.get("/clubs", {
					params: {
						sortBy: sortBy,
						tags: sendTags,
						clubStatus: clubStatus,
						keyword: keyword,
						page: page,
					},
				});

				setClubs(res.data.clubList);
				setTotal(res.data.totalCount);

				const likedClubsRes = await axios.get(`/likedClubs/users/${userId}`);
				setLikedClubs(likedClubsRes.data.clubList);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [page, total, clubStatus, selectedTags, keyword, sortBy, userId]);

	useEffect(() => {
		console.log("likedClubs: ", likedClubs);
	});

	const handleLikedClubs = async (id) => {
		let index = likedClubs.indexOf(id);

		try {
			if (likedClubs.includes(id)) {
				likedClubs.splice(index, 1);
				setLikedClubs([...likedClubs]);
				try {
					await axios.delete("/likedClubs", {
						params: { clubId: Number(id), userId: userId },
					});
				} catch (err) {
					console.log(err);
				}
			} else {
				setLikedClubs([...likedClubs, id]);
				const res = await axios.post("/likedClubs", {
					clubId: Number(id),
					userId: userId,
				});
				if (res.status === 400) message.error("이미 좋아요한 독서모임입니다.");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Wrapper>
			<MainTitle onClick={() => window.location.reload()}>
				독서모임 찾기
			</MainTitle>
			<SearchBar keyword={keyword} setKeyword={setKeyword} />
			<TagFilter
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
			/>
			<TitleRow>
				<Title>{total}개의 독서모임</Title>
				<CheckboxFilter
					onChange={(e) => {
						setClubStatus(e.target.checked ? "ACTIVE" : "");
					}}
				>
					모집중
				</CheckboxFilter>
				<SortFilter
					showSearch
					placeholder="정렬필터"
					onChange={(value) => setSortBy(value)}
				>
					<Option value="createdAt">최신순</Option>
					<Option value="likes">좋아요순</Option>
				</SortFilter>
			</TitleRow>
			<CardContainer gutter={[48, 48]}>
				{clubs
					? clubs.map((club) => (
							<Col key={club.id} span={8}>
								<ClubCard
									club={club}
									likedClubs={likedClubs}
									handleLikedClubs={handleLikedClubs}
								/>
							</Col>
					  ))
					: ""}
			</CardContainer>
			<PaginationRow>
				<Pagination
					total={total}
					pageSize={9}
					current={page}
					onChange={(page) => setPage(page)}
				/>
			</PaginationRow>
		</Wrapper>
	);
};

export default Main;
