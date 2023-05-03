Rails.application.routes.draw do
  root "root#home"
  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index show] do
        collection { get :random }
      end
    end
  end
end
