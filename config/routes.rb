Rails.application.routes.draw do
  resources :plants
  resources :plant_categories
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/plants/:plant_id/plant_categories/:id', to: 'plant_categories#add_plant'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
