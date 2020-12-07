import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { BaseAddress } from "../Environment/Environment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  tabs: {
    borderRadius: 10
  },
  tabsRoot: {
		margin: "0",
		borderBottom: "1px solid #e8e8e8"
	},
	tabsIndicator: {
		backgroundColor: "#fff",
		visibility: "hidden"
	},
	tabRoot: {
		color: "#fff",
		textTransform: "initial",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing.unit * 4,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		"&:hover": {
			color: "#eee",
			opacity: 1
		},
		"&$tabSelected": {
			color: "#fff"
		},
		"&:focus": {
			color: "#fff"
		}
	}
}));

const renderTab = props => {
	console.log(props);

	return (
		<div
			style={{
				backgroundImage: `url(${props.img})`,
				backgroundSize: "cover",
				borderRadius: "4px",
				width: "160px",
				height: "65px",
				marginLeft: "5px",
				textTransform: "uppercase",
        padding: "0 15px",
        color: "white"
			}}
			{...props}
		>
			{props.title}
		</div>
	);
};

export default function CategoriesTabs(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    data: {},
    value: 0,
    isLess: true,
    viewString: "[+] View More",
    selectString: ""
  });

  React.useEffect(() => {
    if (Object.entries(props.data).length > 0) {
      setState({
        ...state,
        data: props.data.product_list,
        selectString: props.data.category_list[0].category_name
      });
    }
  }, [Object.entries(props.data).length]);

  async function handleChange(event, newValue) {
    const categoryId = event.currentTarget.id;
    const categoryName = event.target.innerText;
    const response = await fetch(
      `${BaseAddress}/catalog/v1.0.1?category_id=${categoryId}`
    );
    response.json().then(data => {
      setState({
        ...state,
        data: data,
        value: newValue,
        isLess: true,
        viewString: "[+] View More",
        selectString: categoryName
      });
    });
  }

  const changeView = () => {
    let newView = state.isLess ? false : true;
    let newString = state.isLess ? "[-] View Less" : "[+] View More";
    setState({ ...state, isLess: newView, viewString: newString });
  };

  const changeCategory = (event, newValue) => {
    handleChange(event, newValue);
  };

  return (
    <div className={classes.root}>
       <Tabs
        value={state.value}
        onChange={handleChange}        
        variant="scrollable"
        scrollButtons="auto"
        className="tabs__root"
				classes={{
							root: classes.tabsRoot,
							indicator: classes.tabsIndicator
						}}
      >
        {props.data.category_list
          ? props.data.category_list.map(value => {
              return (
                <Tab
                  className={classes.tabs}
                  key={value.category_id}
                  id={value.category_id}
                  component={renderTab}
                  img={value.category_image}
                  title={value.category_name}
                  label={value.category_name}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                />
              );
            })
          : ""}
      </Tabs>
      {state.data.products
        ? state.isLess
          ? state.data.products.slice(0, 3).map(value => {
              return <ProductList data={value} key={value.id} />;
            })
          : state.data.products.map(value => {
              return <ProductList data={value} key={value.id} />;
            })
        : ""}
      <Footer
        changeString={state.selectString}
        viewString={state.viewString}
        changeView={changeView}
        changeCategory={changeCategory}
        category={props.data.category_list}
      />
    </div>
  );
}

CategoriesTabs.propTypes = {
  data: PropTypes.object.isRequired
}