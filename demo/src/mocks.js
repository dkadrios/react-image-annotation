import {
  PointSelector,
  OvalSelector
} from '../../src/selectors'

export default {
  annotations: [
    {
      geometry:
      {
        type: PointSelector.TYPE,
        x: 25,
        y: 31,
        width: 0,
        height: 0
      },
      data: {
        text: 'Annotate!',
        id: 1
      }
    },
    {
      geometry:
      {
        type: OvalSelector.TYPE,
        x: 53,
        y: 33,
        width : 17.5,
        height: 28
      },
      data: {
        text: 'Supports custom shapes too!',
        id: 2
      }
    }
  ]
}
