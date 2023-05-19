import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import VerticalNav from "../../../components/VerticalNav/VerticalNav";
import DB from "../../../database/db";
import EngineNavCategories from "../../../components/VerticalNav/EngineNavCategories";
import { GeneralDiv, LoadingScreen, Input } from "./General";
import { InputsWithSidebar, Sidebar, SidebarInputs, SidebarItem } from "./Camshaft";

const IntakeCamshaft = () => {
	let { id } = useParams();

	const navigate = useNavigate();
	const [engine, setEngine] = useState(null);

	useEffect(() => {
		setEngine(DB.GetEngine(id));
	}, []);

	if (engine === null) {
		return (
			<LoadingScreen>
				<h1>Loading...</h1>
				<p>Not Loading? <br /> Maybe the page encountered an error. Check the console for more details</p>
			</LoadingScreen>
		);
	} else if (engine === undefined) {
		navigate("/");
		return;
	}
	return (
		<GeneralDiv>
			{/* <Header name={engine.name} categories={<EngineHeaderCategories id={id} />} /> */}
			<VerticalNav name={engine.name} categories={<EngineNavCategories id={id} />} />
			<InputsWithSidebar>
				<Sidebar>
					<Link style={{color: "transparent"}} to={`/engines/${id}/edit/camshaft/intake`}>
						<SidebarItem active="true">
							<h1>Intake</h1>
						</SidebarItem>
					</Link>
					<Link style={{color: "transparent"}} to={`/engines/${id}/edit/camshaft/exhaust`}>
						<SidebarItem>
							<h1>Exhaust</h1>
						</SidebarItem>
					</Link>
				</Sidebar>
				<SidebarInputs>
					<Input>
						<h1>Lift:</h1>
						<p>thou</p>
						<input
							type="number"
							defaultValue={engine.camshaft.intake.lift}
							required
							min="0"
							step="1"
							onChange={(e) => {
								DB.Thing.ChangeParam({ type: "engine", name: engine.name, path: "camshaft.intake.lift", value: e.target.value });
								setEngine(DB.GetEngine(id))
							}}
						/>
					</Input>
					<Input>
						<h1>Duration:</h1>
						<p>deg</p>
						<input
							type="number"
							defaultValue={engine.camshaft.intake.duration}
							required
							min="0"
							step="1"
							onChange={(e) => {
								DB.Thing.ChangeParam({ type: "engine", name: engine.name, path: "camshaft.intake.duration", value: e.target.value });
								setEngine(DB.GetEngine(id))
							}}
						/>
					</Input>
					<Input>
						<h1>Gamma:</h1>
						<input
							type="number"
							defaultValue={engine.camshaft.intake.gamma}
							required
							min="0"
							step="1"
							onChange={(e) => {
								DB.Thing.ChangeParam({ type: "engine", name: engine.name, path: "camshaft.intake.gamma", value: e.target.value });
								setEngine(DB.GetEngine(id))
							}}
						/>
					</Input>
					<Input>
						<h1>Steps:</h1>
						<input
							type="number"
							defaultValue={engine.camshaft.intake.steps}
							required
							min="0"
							step="1"
							onChange={(e) => {
								DB.Thing.ChangeParam({ type: "engine", name: engine.name, path: "camshaft.intake.steps", value: e.target.value });
								setEngine(DB.GetEngine(id))
							}}
						/>
					</Input>
				</SidebarInputs>
			</InputsWithSidebar>
		</GeneralDiv>
	);
};

export default IntakeCamshaft;
