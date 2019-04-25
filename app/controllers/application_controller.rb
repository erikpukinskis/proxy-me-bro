class ApplicationController < ActionController::API
	def getUrl
		render :html => "<h1>Simple Amazon</h1><button>Buy Something</button>".html_safe
	end
end
