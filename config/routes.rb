Rails.application.routes.draw do
  root 'home#index'
  
  namespace :api do
    namespace :v1 do
      resources :animals, param: :id
      resources :daily_updates, only: [:create, :destroy]
    end
  end
  
  get '*path', to: 'home#index', via: :all

end
