$('./body') {
	$("./div[@id='Container']"){
		remove("./div[@id='AjaxLoading']")
		$("./div[@id='TopMenu']"){
			remove("./ul/li[not(@class)]")
			$("./ul/li"){
				text(){
					clear()
				}
			}
			remove("./br")
			move_to("../div[@id='Outer']/div[@id='Header']/div[@id='Logo']")
			move_to("../div[@id='Outer']/div[@id='Header']/div[@id='Logo']")
		}
		$("./div[@id='Outer']"){
			$("./div[@id='Wrapper']"){
				$("./div[@id='LayoutColumn1']"){
					
					remove("./div[@id='SideNewsletterBox']")
					$("./div[@id='SideCategoryList']"){
						move_to("../../../div[@id='Menu']")
					}
					
				}
				
				$("../div[@id='Header']"){
				remove("./div[@id='SearchForm']/p")
					remove("./br")
					attribute("data-ur-set","toggler")
					$("./div[@id='SearchForm']")
					{
						$("./form"){
							$("./input[@class='Textbox']"){
								$("../label"){
									$val=fetch("text()")
								}
								attribute("placeholder",$val)
								remove("../label")
							}
							$("./input[@class='Button']"){
								attribute("src",asset("images/transparent.png"))
								#attribute("type","")
							}
						}
						wrap("div",class:"_searchMenu")
					}
					$("./div[@class='_searchMenu']"){
						insert("div",class:"_menu"){
							attribute("data-ur-toggler-component","button")
						}
					}
					move("../div[@id='Menu']","../div[@id='Header']")
					$("./div[@id='Menu']"){
						attribute("data-ur-toggler-component","content")
						$(".//li/a") {
							insert("span",class:"mw_arrow")
						}
					}
					
				}
			}
		}
	}
}
