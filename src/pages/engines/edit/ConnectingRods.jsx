import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Database from "../../../database/database";
import deleteIcon from "../../../images/delete.svg";
import plus from "../../../images/plus.svg";
import { LoadingScreen, Inputs, Input } from "./General";
import { SideBar, InternalEditor, Editor, EditorTop, Top } from "./Bank";
import ConnectingRod from "../../../components/Rods/ConnectingRod";
import JournalRod from "../../../components/Rods/JournalRod";

const ConnectingRodsDiv = styled.div`
	width: 100%;
	height: calc(100% - 70px);
	padding: 15px;
	display: flex;
	flex-direction: column;
`;

const MySideBar = styled(SideBar)`
	background-color: transparent;
	box-shadow: none;
	gap: 20px;
	padding: 0px;
`;

const TopSideBar = styled(SideBar)`
	/* flex-grow: 1; */
`;

const BottomSideBar = styled(SideBar)`
	/* flex-grow: 1; */
`;

const MyInputs = styled(Inputs)`
	background-color: transparent;
	box-shadow: none;
	padding: 0px;
`;

const ConnectingRods = () => {
	let { name, id } = useParams();
	const navigate = useNavigate();
	const [engine, setEngine] = useState(null);

	useEffect(() => {
		const engine = Database.Engines.getById({ id });
		if (!engine) return setEngine(undefined);
		setEngine(engine);
	}, []);

	if (engine === null) {
		return (
			<LoadingScreen>
				<h1>Loading...</h1>
				<p>Not Loading? <br/> Maybe the page encountered an error. Check the console for more details</p>
			</LoadingScreen>
		);
	} else if (engine === undefined) {
		navigate("/");
		return;
	}
	return (
		<ConnectingRodsDiv>
			<Header engine={engine} />
			<Editor>
				<MySideBar>
					<TopSideBar>
						<Top>
							<h3>Journal Rods</h3>
							<img src={plus} alt="Add" />
						</Top>

						<JournalRod
							name="Journal Rod 1"
							id={1}
							engineName={name}
						/>
					</TopSideBar>
					<BottomSideBar>
						<Top>
							<h3>Connecting Rods</h3>
							<img src={plus} alt="Add" />
						</Top>

						<ConnectingRod
							name="Connecting Rod 1"
							id={1}
							engineName={name}
						/>
					</BottomSideBar>
				</MySideBar>

				<InternalEditor>
					<EditorTop>
						<h1>Connecting Rod {id}</h1>
						<img
							src={deleteIcon}
							alt="Delete"
							style={{ transform: "none" }}
						/>
					</EditorTop>

					<MyInputs>
						<Input>
							<h1>Mass:</h1>
							<p>grams</p>
							<input
								type="number"
								defaultValue={250}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Moment of inertia:</h1>
							<input
								type="number"
								defaultValue={0.0015884918028487504}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Center of Mass:</h1>
							<input
								type="number"
								defaultValue={0}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Length:</h1>
							<p>mm</p>
							<input
								type="number"
								defaultValue={4}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>
					</MyInputs>
				</InternalEditor>
			</Editor>
		</ConnectingRodsDiv>
	);
};

export { MyInputs, MySideBar, TopSideBar, BottomSideBar, ConnectingRodsDiv };
export default ConnectingRods;
