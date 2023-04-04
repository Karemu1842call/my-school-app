Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :techmentors, only: [:index, :show, :update, :destroy]
  resources :cohorts
  resources :schools
  resources :students

  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
