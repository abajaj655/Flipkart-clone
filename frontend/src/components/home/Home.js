import { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 10px;
    background-color: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />

            </Component>
        </>
    )
}

export default Home;