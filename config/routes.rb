Rails.application.routes.draw do
  resources :saved_places, only: [:create, :update, :destroy]
  resources :places, only: [:index]
  resources :users, only: [:show, :create, :update, :destroy]

  #Custom routes for login, persistance, and logout
  post "/login", to: "sessions#create"
  get "/userInSession", to: "sessions#get_user_in_session"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
