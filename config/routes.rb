Rails.application.routes.draw do
  root to: 'english_words#index'
  resources :english_words, only: [:new,:create]
end
