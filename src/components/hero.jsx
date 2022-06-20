import React from 'react'
import img1 from '../images/austin-healey.png'
import img2 from '../images/jaguar.png'
import img3 from '../images/mg.png'
import img4 from '../images/triumph.png'
import Background from '../images/parts/heroes/default.jpg';

function hero() {
  return (
   <>
<div id="Content_PageBody_heroJumbotron" className="jumbotron dealer">							
    <div className="container">
            <div className="row">

                    <div className="col-md-12 jumbotronElementContainer" style={{
              backgroundImage: `url(${Background})`,
            }}>
                            <div className="panel heroPlacementContainer">
                                    <div className="panel-heading">
                                            <h2 className="panel-title">
                                                    Premium Austin Healey, Jaguar, MG, and Triumph Parts
                                            </h2>
                                    </div>
                                    <div className="panel-body">
                                            <span className="defaultHeroBodyText">
                                                    <span className="bodyTextSpan">
                                                            Unmistakable style. That's what you love about your Austin Healey, Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large selection of premium repair, maintenance and restoration parts for classNameic British cars. You know you can count on us because we're located in Kalamazoo, MI. Finding the right premium repair parts has always been our first priority. Our state of the art premium parts diagrams ensure that you're getting the perfect part the first time. Our experienced team knows these cars inside and out, and is here to help. Excellence. The first time, every time.				
                                                    </span>
                                            </span>
                                    </div>
                            </div>
                            
                    </div>
            </div>
    </div>
</div>
		<div id="Content_PageBody_VehicleSelector" className="selectVehicle">
		
			<div id="Content_PageBody_div_seoLinks" className="container">
														<div id="Content_PageBody_seoContainerDiv" className="seoContainer">
																<div id="Content_PageBody_seoTitle" className="seoTitle lead text-center">
																		<h2>
																				Select a  Make
																		</h2>
																</div>
																    <div id="Content_PageBody_RefineResultsDefaultContainer" className="row refineResults">
																		
																						<a className="seoLinkItem Make" href="#" title="Shop OEM Austin Healey Parts">
																								<img src={img1} alt="" />
																								<div>Austin Healey</div>
																						</a>
																				
																						<a className="seoLinkItem Make" href="#" title="Shop OEM Jaguar Parts">
																								<img src={img2} alt="" />
																								<div>Jaguar</div>
																						</a>
																				
																						<a className="seoLinkItem Make" href="#" title="Shop OEM MG Parts">
																								<img src={img3} alt="" />
																								<div>MG</div>
																						</a>
																				
																						<a className="seoLinkItem Make" href="#" title="Shop OEM Triumph Parts">
																								<img src={img4} alt="" />
																								<div>Triumph</div>
																						</a>
                                                                                </div>
                                                                                </div>
	</div>

</div>				
  </>

  )
}

export default hero