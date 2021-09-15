Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#is_logged_in?"

  resources :users, only: %i[create show index] do
    resources :observations, only: %i[create index]
  end
  resources :messiers, only: %i[create show index]
end
