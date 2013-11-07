
$('./body') {
	
		$("./div[@id='Container']"){
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){		
			
			$("./div[@id='LayoutColumn1']"){
					$("./div[@id='SideCategoryShopByPrice']"){
						attribute("data-ur-set","toggler")
						$("./h2"){
							attribute("data-ur-toggler-component","button")
							insert("span",class:"mw_togglerImage")
						}
						$("./div[@class='BlockContent']"){
							add_class("mw_toggler_content")
							attribute("data-ur-toggler-component","content")
							$("./ul/li"){
								insert("span",class:"mw_arrow")
							}
						}
					}
					$("./div[@id='SideShopByBrand']"){
						attribute("data-ur-set","toggler")
						$("./h2"){
							attribute("data-ur-toggler-component","button")
							insert("span",class:"mw_togglerImage")
						}
						$("./div[@class='BlockContent']"){
							add_class("mw_toggler_content")
							attribute("data-ur-toggler-component","content")
							$("./ul/li"){
								insert("span",class:"mw_arrow")
							}
						}
					}
				}
				$("./div[@id='LayoutColumn2']"){
					remove("./div[@id='CategoryBreadcrumb']")
					remove(".//div[@class='ProductCompareButton']")
					$("./div[@id='CategoryHeading']/div[@class='BlockContent']"){
						$("./h2"){
							wrap("div", class: "_category_heading")
						}
						$("./div[@class = '_category_heading']") {
							move_to("/html/body//div[@id='Wrapper']","top")
						}
						remove("./div[@class='SubCategoryList']")
					}
					
					$("./div[@id='CategoryContent']/form/ul[@class='ProductList ']"){
						add_class("mw_category_ProductList")
						$("./li"){
							wrap_together("./div[not(contains(@class, 'ProductImage '))]","div",class: "mw_details")
							$("./div[contains(@class, 'ProductImage ')]"){
								add_class("mw_category_ProductImage")
							}
						}
					}
					remove(".//div[@class='CompareButton']")
				}
				remove("./div[@id='LayoutColumn3']")
			}
		}
	}
}