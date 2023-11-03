import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { Title } from '../components'
import { Button } from '../theme/daisyui'
import * as L from '../store/loading'

export default function TimedLoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector((state: AppState) => state.loading);

  const doTimedLoading = useCallback(() => {
    dispatch(L.doTimedLoading(1000))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>Timed Loading Test</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn-sm btn-primary"
            onClick={doTimedLoading}
            disabled={loading}
          >
            Do Timed Loading
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}
      </div>
    </section>
  )
}
