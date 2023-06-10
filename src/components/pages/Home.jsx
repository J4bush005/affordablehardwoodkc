import React from "react";
import { Animator, 
ScrollContainer, 
ScrollPage,
batch,
Sticky,
Fade,
MoveOut,
Zoom
} from "react-scroll-motion";
import Logo from "../images/Logo.png";
import Demo1 from "../images/Demo1.png";
import Demo2 from "../images/Demo2.png";
import Demo3 from "../images/Demo3.png";
import Demo4 from "../images/Demo4.png";
import Demo5 from "../images/Demo5.png";
import Demo6 from "../images/Demo6.png";
import { Link } from "react-router-dom";



function Home() {
    return(
    <ScrollContainer>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Demo1} class="d-block img-responsive image-resize" alt=""></img>
                </div>
             <div class="carousel-item">
                <img src={Demo2} class="d-block img-responsive image-resize" alt=""></img>
            </div>
            <div class="carousel-item">
                <img src={Demo3} class="d-block img-responsive image-resize" alt=""></img>
            </div>
             <div class="carousel-item">
                <img src={Demo4} class="d-block img-responsive image-resize" alt=""></img>
            </div>
             <div class="carousel-item">
                <img src={Demo5} class="d-block img-responsive image-resize" alt=""></img>
            </div>
             <div class="carousel-item">
                <img src={Demo6} class="d-block img-responsive image-resize" alt=""></img>
            </div>
         </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
     </div>

            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(20,30), Fade(), MoveOut())}>
                <h2>Let me show you scrtoll animatyion</h2>
                </Animator>
            </ScrollPage>
             <ScrollPage page={1}>
                <Animator animation={Zoom()}>
                <h2>Paragraph 2</h2>
                </Animator>
            </ScrollPage>
       </ScrollContainer>
    );
}

export default Home;
