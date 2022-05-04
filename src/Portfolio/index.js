import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGithubRepos } from "../slice";
import Content from "./Content";
import {
    Wrapper,
    HeaderIcon,
    Header,
    Caption,
} from "./styled";

const Portfolio = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGithubRepos())
    }, [dispatch])

    return (
        <Wrapper>
            <HeaderIcon />
            <Header>Portfolio</Header>
            <Caption>My recent projects</Caption>
            <Content />
        </Wrapper>
    );
};

export default Portfolio;