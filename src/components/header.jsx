import React from 'react'
import logo from '../images/logo.png'

function header() {
  return (
    <>
    <form method="post" action="">
    <a href="#" tabindex="0" className="skip" target="_self">Skip to Content</a>
    
    <div className="h1TextHeader">
        <div className="container">
            <div className="row navbar-row">
                <div className="col-sm-11 small single-text-line-small h1Text">
                    <h1 className="body-2 text-muted">
                        Browse our complete catalog of OEM and licensed British heritage parts for your classNameic British automobile. | Kalamazoo, MI</h1>
                </div>
                
                
            </div>
        </div>
    </div>

{/* <div id="ContentPlaceHolderContainer" className="content en"> */}
        

<div className="header-navigation sp-nav dealer" id="HeaderNavigationContainer">
<div className="navbar navbar-default header-nav-default">
   <nav className="navbar navbar-default headerNav">
    <div className="container">
        
        <div className="collapse navbar-collapse" id="nav-links"></div>
       
            <div className="navbar-header header-logo">
                <a className="navbar-brand business-logo" href="#">
                    <img alt="" src={ logo } /></a>
            </div>
            <div className="navbar-text business-information">
                <div className="business-information__name heading-2" href="/">EnglishParts.com</div>
                <div className="business-contact-details">
                    <div className="contact-detail business-contact-details__location">5850 Stadium Dr, Kalamazoo, MI 49009</div>
                    <div className="contact-detail business-contact-details__phone">866.467.1776</div>
                    <div className="contact-detail business-contact-details__email"><a tabindex="0" className="small" href="#">sales@englishparts.com</a></div>
                </div>
            </div>
         
                    <button type="button" className="navbar-toggle collapsed header-mobile-toggle" data-toggle="collapse" aria-expanded="false" id="MobileNavToggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <ul className="nav navbar-nav navbar-right navigation-link-group" id="HeaderNavigationLinks">
             
            <li id="PartsDropdown" className="dropdown navigation-list-item"><a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle navigation-link category-links-button">Parts</a> <ul className="dropdown-menu navlink-dropdown-menu"></ul></li>
           
           <li><a href="#" className="about-us-link navigation-links heading-4">About Us</a></li>
           
        </ul>
    </div>
  </nav>
</div>

</div>

<div className="utility-bar-top">
        <div className="container utility-bar-container">
            <div className="utility-bar__section utility-bar__search" role="search" aria-labelledby="header-search">
                <div className="input-group utility-bar__element">
                    <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
                    <label for="SearchInput" className="sr-only">Search</label>
                    <input id="SearchInput" type="text" title="Click here to search" className="form-control utility-bar__search-input" placeholder="Search by Keywords, Part Numbers or VIN" autocomplete="off" />
                    <span className="input-group-btn" title="Search Button">
                        <button type="button" className="btn btn-default utility-bar__search-button" id="searchBtn">Go </button>
                    </span>
                </div>
            </div>

            <div className="utility-bar__element">
                    <div className="utility-bar__select-vehicle-text">
                        Select Your Vehicle
                    </div> 
                    <button type="button" aria-label="Select Vehicle Button" className="utility-bar__select-vehicle-button"><span className="icon-arrow-down select-vehicle-icon"></span></button>
            </div>
            <div className="utility-bar__section">
                    <button type="button" id="CartWidgetHeaderButton" className="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button"><span className="cart-widget-button__icon icon-basket"></span> <span id="NumCartItems" aria-label="0 in Cart. Click to view Cart" className="cart-widget-button__number badge-normal">0</span></button>
            </div>
        </div>
        
 </div>
</form>       

</>
       
  )
}

export default header