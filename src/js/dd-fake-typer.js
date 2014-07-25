/**
 * @ngdoc overview
 * @name dd.fake-typer
 *
 * @description
 * A fake typer
 */

angular.module('dd.fake-typer', [])
  .constant('ddFakeTyperConfig', {
    shuffle:
    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [v1.0]
    function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    },
    range: function(max) {
      var range = new Array(max), i = 0;
      while (i < max) {
        range[i] = i++;
      }
      return range;
    }
  })
  .controller('ddFakeTyperController', function FakeTyperCtrl($scope, $interval, $q, $timeout, ddFakeTyperConfig) {
    var ctrl = this,
      tabs = ctrl.options = $scope.options = [];

    ctrl.isRunning = false;
    ctrl.currentChar = 0;
    ctrl.currentOptionIndex = 0;
    ctrl.currentTypingTest = '';

    ctrl.addOption = function addOption(tab) {
      tabs.push(tab);
      // we can't run the select function on the first tab
      // since that would select it twice
      if (tabs.length === 1) {
        tab.active = true;
      } else if (tab.active) {
        ctrl.select(tab);
      }

      ctrl.run();
    };


    ctrl.typingAnimation = function(direction, speed) {
      var limit = 0;
      var dfd = $q.defer();

      if (direction > 0) {
        limit = ctrl.currentTypingTest.length;
      }

      ctrl.isTyping = $interval(function() {
        ctrl.currentChar += direction;
        ctrl.typedTest = ctrl.currentTypingTest.substr(0, ctrl.currentChar);

        if (ctrl.currentChar === limit) {
          $interval.cancel(ctrl.isTyping);
          dfd.resolve();
        }
      }, speed);

      return dfd.promise;
    };

    ctrl.eraseCurrentWord = function() {
      return ctrl.typingAnimation(-1, +ctrl.erasingSpeed);
    };

    ctrl.enterCurrentWord = function() {
      return ctrl.typingAnimation(1, +ctrl.typingSpeed);
    };

    ctrl.wait = function() {
      var dfd = $q.defer();
      var currentCursor = ctrl.cursor;

      ctrl.cursorBlinking = $interval(function() {
        ctrl.cursor = ctrl.cursor.length ? '' : currentCursor;
      }, +ctrl.cursorBlinkingSpeed);

      $timeout(function() {
        dfd.resolve();
        ctrl.cursor = currentCursor;

        $interval.cancel(ctrl.cursorBlinking);
      }, +ctrl.waitingTime);
      return dfd.promise;
    };


    ctrl.randomOrderNext = function(currentIndex, limitIndex) {
      if(!(ctrl._shuffledOrder && ctrl._shuffledOrder.length)){
        ctrl._shuffledOrder = ddFakeTyperConfig.shuffle(ddFakeTyperConfig.range(limitIndex));
      }
      return ctrl._shuffledOrder.pop();
    };

    ctrl.ascendingOrderNext = function(currentIndex, limitIndex) {
      var nextIndex = currentIndex + 1;
      return (nextIndex >= limitIndex) ? 0 : nextIndex;
    };

    ctrl.decreasingOrderNext = function(currentIndex, limitIndex) {
      var nextIndex = currentIndex - 1;
      return (nextIndex < 0) ? limitIndex - 1 : nextIndex;
    };



    ctrl.getNextWordIndex = ctrl.ascendingOrderNext;

    ctrl.run = function() {
      if (ctrl.isRunning) {
        return;
      }

      ctrl.isRunning = true;

      (function typingLoop() {

        ctrl.currentOptionIndex = ctrl.getNextWordIndex(ctrl.currentOptionIndex, ctrl.options.length);
        ctrl.currentTypingTest = ctrl.options[ctrl.currentOptionIndex];

        ctrl.enterCurrentWord()
          .then(ctrl.wait)
          .then(ctrl.eraseCurrentWord)
          .then(typingLoop);

      })();
    };

  })

/**
 * Directive dd-fake-typer  / ddFakeTyper
 * <dd-fake-typer
 *  prefix="#"
 *  order="random"
 * >
 * </dd-fake-typer>
 */
.directive('ddFakeTyper', function() {

  var controllerDefaultConfig = {
    prefix: '',
    suffix: '',
    cursor: '|',
    waitingTime: 2000,
    cursorBlinkingSpeed: 500,
    erasingSpeed: 50,
    typingSpeed: 100
  };

  // generateScopeFromConfig
  var configKeys = Object.keys(controllerDefaultConfig);
  var directiveScope = configKeys.reduce(function(memo, key) {
    memo[key] = '@';
    return memo;
  }, {});


  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    controller: 'ddFakeTyperController as ddFakeTyperController',
    templateUrl: 'views/dd-fake-typer.html',
    scope: directiveScope,
    link: function($scope, $element, $attrs, ddFakeTyperController) {
      configKeys.forEach(function(configKey) {
        ddFakeTyperController[configKey] = angular.isDefined($attrs[configKey]) ? $scope.$parent.$eval($attrs[configKey]) : controllerDefaultConfig[configKey];
      });

      //
      if (angular.isDefined($attrs.order)) {
        var order = $scope.$parent.$eval($attrs.order);
        if (angular.isString(order)) {
          switch (order) {
            case 'random':
              ddFakeTyperController.getNextWordIndex = ddFakeTyperController.randomOrderNext;
              break;
            case 'decreasing':
              ddFakeTyperController.getNextWordIndex = ddFakeTyperController.decreasingOrderNext;
              break;
            default: // ascending
              // ddFakeTyperController.getNextWordIndex = ddFakeTyperController.ascendingOrderNext;
              break;
          }
        }
      }

    }
  };
})

/**
 * Directive dd-fake-typer-option / ddFakeTyperOption
 * <dd-fake-type-option
 *  active
 * >
 * </dd-fake-type-option>
 */
.directive('ddFakeTyperOption', function($timeout) {
  return {
    require: '^ddFakeTyper',
    restrict: 'E',
    link: function($scope, $element, $attrs, ddFakeTyperController) {
      $timeout(function() {
        ddFakeTyperController.addOption($element.text());
      }, 100, false);
      $scope.$on('$destroy', function() {
//        ddFakeTyperController.removeOption($element.text());
      });
    }
  };
})

;
