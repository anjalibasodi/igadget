$('./body') {	
	$("./div[@id='Container']"){
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){		
				remove("./div[@id='LayoutColumn1']")
				$("./div[@id='LayoutColumn2']"){
					remove("./div[@id='ProductBreadcrumb']")
					$("./div[@id='ProductDetails']/div[@class='BlockContent']") {
						add_class("_mine")
						remove("./div[@class='Clear AddThisButtonBox']")
						$("./div[@class='ProductThumb']"){
							remove("./div[@class='ImageCarouselBox']")
							$("./div[@class='ProductThumbImage']/a"){
								#remove_attributes()
							}
						}
						$("./div[@class='ProductMain']//form//div[@class='ProductDetailsGrid ProductAddToCart']"){
							add_class("_mine")
							$(".//div[@class='BulkDiscount']") {
							add_class("_mine")
								move_to("//div[@class='ProductMain']")
							}
						}
					}
					$("./div[@id='SimilarProductsByCustomerViews']//ul"){
						add_class("mw_category_ProductList")
						$("./li"){
							wrap_together("./div[not(contains(@class, 'ProductImage'))]","div",class: "mw_details")
							$("./div[contains(@class, 'ProductImage')]"){
								add_class("mw_category_ProductImage")
							}
						}
					}
				}
				remove("./div[@id='LayoutColumn3']")
				
			}
		}
	}
}		