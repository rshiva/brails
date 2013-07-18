# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :attempt do
    increase_count '0'
    solved 'true'
    coins '2'
    association :user
    association :question
    association :topic
  end
end
