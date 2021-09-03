Rails.application.routes.draw do 
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  resources :users, only: %i[create show index] 
  resources :objects, only: %i[create show index]
end
