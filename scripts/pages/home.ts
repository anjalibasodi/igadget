# Place holder/example file
$("/html/body")	{
	$("./div[@id='Container']"){
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){				
			$("./div[@id='LayoutColumn1']"){
				remove("./div[@id='SideShopByBrand']")
			}
				$("./div[@id='LayoutColumn2']"){
					$("./div[@id='HomeFeaturedProducts']"){
						remove("./h2/span")
						$("./div[@class='BlockContent']"){
							attribute("data-ur-set","carousel")
							attribute("data-ur-carousel-component", "view_container")
							insert("div", class: "mw_dots",data-ur-carousel-component: "dots")
							
							$("./ul"){
								attribute('data-ur-carousel-component','scroll_container')
								$("./li"){
									attribute("data-ur-carousel-component","item")
									#$(".//div[@class='QuickView']"){
										#add_class("_mine")
									#}
								}
							}
							
						}
					}
					$("./div[@id='HomeNewProducts']"){
						remove("./h2/span")
						$("./div[@class='BlockContent']"){
							attribute("data-ur-set","carousel")
							attribute("data-ur-carousel-component", "view_container")
							insert("div", class: "mw_dots",data-ur-carousel-component: "dots")
							
							$("./ul"){
								attribute('data-ur-carousel-component','scroll_container')
								$("./li"){
									attribute("data-ur-carousel-component","item")
								}
							}
						}
					}
				}
				remove("./div[@id='LayoutColumn3']")
			}
			
		}
		remove(".//br")
	}
}