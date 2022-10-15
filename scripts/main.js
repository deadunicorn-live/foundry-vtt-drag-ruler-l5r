Hooks.once("dragRuler.ready", SpeedProvider => {
  class L5RSpeedProvider extends SpeedProvider {
    get colors() {
      return [
        {id: "range0", default: 0x00ff00, name: "drag-ruler-l5r.range-bands.range0"},
        {id: "range1", default: 0x2ad500, name: "drag-ruler-l5r.range-bands.range1"},
        {id: "range2", default: 0x55aa00, name: "drag-ruler-l5r.range-bands.range2"},
        {id: "range3", default: 0x808000, name: "drag-ruler-l5r.range-bands.range3"},
        {id: "range4", default: 0xaa5500, name: "drag-ruler-l5r.range-bands.range4"},
        {id: "range5", default: 0xd52b00, name: "drag-ruler-l5r.range-bands.range5"},
        {id: "range6", default: 0xff0000, name: "drag-ruler-l5r.range-bands.range6"},
      ];
    }

    get defaultUnreachableColor() {
      return 0x333333;
    }

    getRanges(token) {
      var distanceRangeBands = [
        {range: 0, color: "range0"},
        {range: 3, color: "range1"},
        {range: 6, color: "range2"},
        {range: 9, color: "range3"},
        {range: 12, color: "range4"},
        {range: 15, color: "range5"},
        {range: 18, color: "range6"},
      ];
      var distanceRelative = [
        {range: 0, color: "range0"},
        {range: 2, color: "range1"},
        {range: 4, color: "range2"},
        {range: 10, color: "range3"},
        {range: 100, color: "range4"},
        {range: 250, color: "range5"},
        {range: 1000, color: "range6"},
      ];

      return this.getSetting("useRelativeDistance") ? distanceRelative : distanceRangeBands;
    }

    get settings() {
      return [
        {
          id: "useRelativeDistance",
          name: "drag-ruler-l5r.settings.useRelativeDistance.name",
          hint: "drag-ruler-l5r.settings.useRelativeDistance.hint",
          scope: "world",
          config: true,
          type: Boolean,
          default: false,
        },
      ];
    }
  }

  dragRuler.registerModule("drag-ruler-l5r", L5RSpeedProvider);
});
