
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var mainscene = ccs.load(res.MainScene_json);
        this.addChild(mainscene.node);
     
        var btnClose = ccui.helper.seekWidgetByName(mainscene.node, "btnClose");
        btnClose.addTouchEventListener(this.onClose,this);

        return true;
    },
    
    onClose: function(sender, type) {
    	var typeStr = '';
    	switch (type) {
    	case ccui.Widget.TOUCH_BEGAN:
    		typeStr = "Touch Down";
    		break;
    	case ccui.Widget.TOUCH_MOVED:
    		typeStr = "Touch Move";
    		break;
    	case ccui.Widget.TOUCH_ENDED:
    		typeStr = "Touch Up";
    		break;
    	case ccui.Widget.TOUCH_CANCELED:
    		typeStr = "Touch Cancelled";
    		break;
    	default:
    		break;
    	}
    	cc.log('%s %s', sender.getName(), typeStr);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

