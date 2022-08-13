import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../images/delete.svg";
import { Right, BankInlineDiv } from "../Banks/BankInline";

const CrankshaftDiv = styled(BankInlineDiv)`
    
`;

const JournalRod = ({ name, btnID, engineName }) => {
	const baseUrl = `/engines/${engineName}/edit/crankshafts/`;
	const navigate = useNavigate();

    const setNav = (e) => {
        navigate(baseUrl + btnID) 
    };

	return (
		<CrankshaftDiv onClick={setNav} active={window.location.pathname === encodeURI(baseUrl + btnID)}>
            <h1>{name}</h1>
            <Right>
                <img src={deleteIcon} alt="Delete" />
            </Right>
		</CrankshaftDiv>
	);
};

export default JournalRod;
