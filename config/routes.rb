Rails.application.routes.draw do
	get '/urls/:id',
		to: 'application#getUrl',
		:constraints => { :id => /.+/ }
end
