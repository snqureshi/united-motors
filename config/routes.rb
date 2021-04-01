Rails.application.routes.draw do
  resources :cars
  resources :models
  resources :makes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
