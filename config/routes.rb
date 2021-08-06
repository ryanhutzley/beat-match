Rails.application.routes.draw do
  
  # resources :liked_users, except: [:update]
  resources :tracks
  resources :users, except: [:show, :create]
  resources :matches, only: [:show, :destroy]
  resources :tags, only: [:index, :destroy, :create]
  resources :track_tags, only: [:index, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/like", to: "liked_users#create"
  get "/getmatches", to: "liked_users#index"
  get "/allliked", to: "liked_users#get_all"

  get "/usermatches", to: "matches#index"
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
