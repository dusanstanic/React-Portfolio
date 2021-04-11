import classes from "./Home.module.scss";
import React, { Component, RefObject } from "react";
import { connect } from "react-redux";

import ArticleM from "../../shared/models/Article";

import { animateOnView } from "../../shared/animation/onView";
import { animateOnViewChildren } from "../../shared/animation/onViewChildren";

import Icons from "../../images/sprite.svg";
import projectImage1 from "../../images/Checkers.png";
import projectImage2 from "../../images/NewsDaily.png";
import projectImage3 from "../../images/GreenEarth.jpg";
import projectImage4 from "../../images/NintendoShop.png";

import Aux from "../../hoc/Auxiliary/Auxiliary";

import * as newsDataActions from "../../store/actions/index";
import SearchParams from "../../shared/models/SearchParams";
import Store from "../../shared/models/StoreI";
import { NavLink } from "react-router-dom";

interface PropsI {
  fetchArticles: (searchParams: SearchParams) => void;
  articles: ArticleM[];
}

interface StateI {
  showModal: boolean;
  article?: ArticleM;
}

class Home extends Component<PropsI, StateI> {
  project: RefObject<HTMLDivElement> = React.createRef();
  overview: RefObject<HTMLDivElement> = React.createRef();
  projectViewHandler?: (this: Document, ev: Event) => any;
  overViewViewHandler?: (this: Document, ev: Event) => any;

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("componentDidMount");
    this.overViewViewHandler = animateOnViewChildren(
      this.overview,
      classes.fadeInAn,
      classes.fadeOutAn
    );
    this.projectViewHandler = animateOnView(
      this.project,
      classes.moveInRightAn,
      classes.fadeOutAn
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.removeEventListener("scroll", this.overViewViewHandler!);
    document.removeEventListener("scroll", this.projectViewHandler!);
  }

  animate = () => {};

  render() {
    return (
      <div className={classes["home"]}>
        <div className={classes["header"]}>
          <div className={classes["header__title"]}>
            <h2 className={classes["header__heading"]}>
              Hello my name is Dusan Stanic
            </h2>
            <h3 className={classes["header__heading-sub"]}>
              Welcome to my portfolio site
            </h3>
          </div>
        </div>

        <div className={classes["projects"]} ref={this.project}>
          <div className={classes["projects__pictures"]}>
            <img
              className={`${classes["projects__image"]} ${classes["projects__image-1"]}`}
              src={projectImage2}
              alt="Project Image"
            />
            <img
              className={`${classes["projects__image"]} ${classes["projects__image-2"]}`}
              src={projectImage4}
              alt="Project Image"
            />
            {/* <img
              className={`${classes["projects__image"]} ${classes["projects__image-3"]}`}
              src={projectImage3}
              alt="Project Image"
            /> */}
          </div>

          <div className={classes["projects__content"]}>
            <h4
              className={`${classes["mb-sm"]} ${classes["projects__heading"]} `}
            >
              Come and see my projects
            </h4>
            <h3
              className={`${classes["mb-sm"]} ${classes["projects__heading--sub"]} `}
            >
              Projects
            </h3>
            <button className={`${classes["btn"]} ${classes["projects__btn"]}`}>
              <NavLink
                className={classes["projects__link"]}
                to={{ pathname: "/project" }}
              >
                View Projects
              </NavLink>
            </button>
          </div>
        </div>

        <h3 className={classes["title"]}>Projects Overview</h3>

        <div className={classes["overviews"]} ref={this.overview}>
          <div className={classes["overview"]}>
            <img
              className={classes["overview__image"]}
              src={projectImage4}
              alt="Project"
            />

            <svg className={classes["overview__type"]}>
              <use xlinkHref={`${Icons}#icon-shop`}></use>
            </svg>

            <h3 className={classes["overview__name"]}>Nintendo Shop</h3>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-tools`}></use>
              </svg>
              <div className={classes["overview__tech"]}>React</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-brush`}></use>
              </svg>
              <div className={classes["overview__tech"]}>SCSS</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-classic-computer`}></use>
              </svg>
              <div className={classes["overview__tech"]}>Shop</div>
            </div>

            <button className={`${classes["btn"]} ${classes["overview__btn"]}`}>
              Read More
            </button>
          </div>
          <div className={classes["overview"]}>
            <img
              className={classes["overview__image"]}
              src={projectImage2}
              alt="Project"
            />

            <svg className={classes["overview__type"]}>
              <use xlinkHref={`${Icons}#icon-news`}></use>
            </svg>

            <h3 className={classes["overview__name"]}>Daily News</h3>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-tools`}></use>
              </svg>
              <div className={classes["overview__tech"]}>React</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-brush`}></use>
              </svg>
              <div className={classes["overview__tech"]}>SCSS</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-classic-computer`}></use>
              </svg>
              <div className={classes["overview__tech"]}>News</div>
            </div>

            <button className={`${classes["btn"]} ${classes["overview__btn"]}`}>
              Read More
            </button>
          </div>
          <div className={classes["overview"]}>
            <img
              className={classes["overview__image"]}
              src={projectImage1}
              alt="Project"
            />

            <svg className={classes["overview__type"]}>
              <use xlinkHref={`${Icons}#icon-game-controller`}></use>
            </svg>

            <h3 className={classes["overview__name"]}>Checkers</h3>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-tools`}></use>
              </svg>
              <div className={classes["overview__tech"]}>Typescript</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-brush`}></use>
              </svg>
              <div className={classes["overview__tech"]}>SCSS</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-classic-computer`}></use>
              </svg>
              <div className={classes["overview__tech"]}>Game</div>
            </div>

            <button className={`${classes["btn"]} ${classes["overview__btn"]}`}>
              Read More
            </button>
          </div>
          <div className={classes["overview"]}>
            <img
              className={classes["overview__image"]}
              src={projectImage3}
              alt="Project"
            />

            <svg className={classes["overview__type"]}>
              <use xlinkHref={`${Icons}#icon-images`}></use>
            </svg>

            <h3 className={classes["overview__name"]}>Green Earth</h3>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-tools`}></use>
              </svg>
              <div className={classes["overview__tech"]}>Javascript</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-brush`}></use>
              </svg>
              <div className={classes["overview__tech"]}>SCSS</div>
            </div>

            <div className={classes["overview__about"]}>
              <svg className={classes["overview__info"]}>
                <use xlinkHref={`${Icons}#icon-classic-computer`}></use>
              </svg>
              <div className={classes["overview__tech"]}>Brochure</div>
            </div>

            <button className={`${classes["btn"]} ${classes["overview__btn"]}`}>
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state: Store) => {
  return {
    articles: state.articleData.articles,
  };
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     fetchArticles: (searchParams: SearchParams) => {
//       dispatch(
//         newsDataActions.fetchArticles({
//           country: searchParams.country,
//           category: searchParams.category,
//         })
//       );
//     },
//   };
// };

export default connect(mapStateToProp, null)(Home);
