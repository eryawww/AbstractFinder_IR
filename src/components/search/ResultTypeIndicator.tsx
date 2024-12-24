interface ResultTypeIndicatorProps {
  resultType: 'original' | 'refined'
}

export const ResultTypeIndicator = ({ resultType }: ResultTypeIndicatorProps) => (
  <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
    Currently showing: <span className="font-medium">{resultType === 'original' ? 'Original' : 'Refined'} query results</span>
  </div>
)
