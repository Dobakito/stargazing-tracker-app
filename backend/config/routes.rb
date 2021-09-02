Rails.application.routes.draw { resources :users, only: %i[create show index] }
