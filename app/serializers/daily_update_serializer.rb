class DailyUpdateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :weight, :drank_water, :ate_food, :notes
end
