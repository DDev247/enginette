import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Database from "../../../database/database";
import deleteIcon from "../../../images/delete.svg";
import plus from "../../../images/plus.svg";
import { LoadingScreen, Input } from "./General";
import { SideBar, InternalEditor, Editor, EditorTop, Top } from "./Bank";
import ExhaustInline from "../../../components/Exhausts/ExhaustInline";
import { MyInputs, ConnectingRodsDiv } from "./ConnectingRods";

const ExhaustsDiv = styled(ConnectingRodsDiv)`
	width: 100%;
	height: calc(100% - 70px);
	padding: 15px;
	display: flex;
	flex-direction: column;
`;

const Exhausts = () => {
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
		<ExhaustsDiv>
			<Header engine={engine} />
			<Editor>
				<SideBar>
					<Top>
						<h3>Exhausts</h3>
						<img src={plus} alt="Add" />
					</Top>

					<ExhaustInline name="Exhaust 1" btnID={1} engineName={id} />
				</SideBar>

				<InternalEditor>
					<EditorTop>
						<h1>Exhaust {id}</h1>
						<img
							src={deleteIcon}
							alt="Delete"
							style={{ transform: "none" }}
						/>
					</EditorTop>

					<MyInputs>
						<Input>
							<h1>Outlet Flow Rate:</h1>
							<p>scfm</p>
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
							<p>inches</p>
							<input
								type="number"
								defaultValue={0}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Flow Rate:</h1>
							<p>scfm</p>
							<input
								type="number"
								defaultValue={0}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Velocity Decay:</h1>
							<input
								type="number"
								defaultValue={1}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

						<Input>
							<h1>Volume:</h1>
							<p>liters</p>
							<input
								type="number"
								defaultValue={0}
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>
					</MyInputs>
				</InternalEditor>
			</Editor>
		</ExhaustsDiv>
	);
};

export default Exhausts;
