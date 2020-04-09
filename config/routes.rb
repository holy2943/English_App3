Rails.application.routes.draw do
  devise_for :users
  root to: 'english_words#index'

  resources :english_words do
    collection do
        get :quiz #quizアクションを追加
    end  
  end
  resources :users, only: :show
end
