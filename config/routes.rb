Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :makes, only: :index
  resources :models, only: :index
  resources :cars
  get '/user_cars', to: 'cars#user_cars'
  resources :users, only: :create
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
