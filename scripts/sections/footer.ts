$("./body") {
	$("./div[@id='Footer']"){
		$("./p"){
			wrap_text_children("span")
			remove("./a")
			name("div")
			remove("./span[4]")
			remove("./span[4]")
			$("./span[1]"){
				move_here("../span[2]")
			}
			$("./span[1]/span"){
				unwrap()
			}
		}
	}
}
